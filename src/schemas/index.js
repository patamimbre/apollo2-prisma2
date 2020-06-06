import { mergeSchemas } from 'graphql-tools';

import bookSchema from './book';
import userSchema from './user'

const schema = mergeSchemas({
  schemas: [bookSchema, userSchema],
})

export default schema;
