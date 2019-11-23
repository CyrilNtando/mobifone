class APIFeatures {
  constructor(query, queryString) {
    this.query = query; //from mongoose
    this.queryString = queryString; //from express route
  }

  filter() {
    //filtering
    ///product?brand=nokia&category=wearable
    const queryObject = { ...this.queryString };
    //fields to ignore when filtering
    const excludedFields = ['page', 'sort', 'limit', , 'fields'];
    //remove queries from queryObject
    excludedFields.forEach(el => delete queryObject[el]);

    //Advanced Filtering
    ///product?price[gte]=2000&category=wearable
    let queryStr = JSON.stringify(queryObject);
    //find any of this strings(gte|gt|lte|lt) and concatenate with dollar sign
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    //Sorting
    if (this.queryString.sort) {
      const sortBy = this.queryString.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limitFields() {
    //Field limiting
    ///product?fields=name,price,brand
    if (this.queryString.sort) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    //Pagination
    ///product?page=4&limit=3
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;
    //page=2&limit=10, 1-10,page 1,11 -20,page 2, 21 -30 page 3
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
