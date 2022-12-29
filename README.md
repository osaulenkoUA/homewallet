# Node.Js
PUT
http://localhost:3004/category/updateCategory
{
"category": "Sasha", as id
"description":["Games"] 
}

GET
http://localhost:3004/category/getCategories

POST
http://localhost:3004/category/addCategory
{
"category": "Sasha",
"description": ["Аптека","Інше"]
}

POST
http://localhost:3004/finances/addOperation
{
category: {type: String, required: true},
description: {type: String, required: true},
amount: {type: Number, required: true},
balance: {type: Number, required: false, default: 0},
date: {type: String, required: false}
}

GET
http://localhost:3004/finances/getOperation
