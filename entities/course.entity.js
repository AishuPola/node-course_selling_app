import { Entity } from "electrodb"; //ORM
import { client } from "../util/dbconnection.js";
const courses = new Entity(
  {
    model: {
      entity: "courses",
      version: "1",
      service: "courseService",
    },
    attributes: {
      courseId: {
        type: "string",
        required: true,
      },
      coursename: {
        type: "string",
        required: true,
      },
      username: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      imageurl: {
        type: "string",
        required: true,
      },
      price: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["courseId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "courses" }
);
export { courses };
