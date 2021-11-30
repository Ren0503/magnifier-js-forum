# Magnifier
![Magnifier](https://github.com/Ren0503/magnifier-js-forum/blob/master/client/public/header.png)
> Magnifier diễn đàn cho hỏi đáp các vấn đề về công nghệ thông tin. 
- **server** : chứa API cho diễn đàn, được tạo bằng Nodejs, Express và MongoDB với Mongoose. Sử dụng REST API.
- **client**: trang giao diện, được tạo với Next, Context API và CSS Modules.

## Tính năng

1. Đăng nhập/đăng ký
2. Hỏi câu hỏi
3. Trả lời câu hỏi
4. Bình luận câu hỏi/trả lời
5. Upvote/Downvote
6. Tìm kiếm tags
7. Tìm kiếm người dùng
8. Sắp xếp theo lượt xem, views, thời gian

### Server

| Plugin | README |
| ------ | ------ |
| bcryptjs | [plugins/bcryptjs/README.md](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md) |
| body-parser | [plugins/body-parser/README.md](https://github.com/expressjs/body-parser/blob/master/README.md) |
| cors | [plugins/cors/README.md](https://github.com/expressjs/cors/blob/master/README.md)|
| express | [plugins/express/README.md](https://github.com/expressjs/express/blob/master/Readme.md) |
| jsonwebtoken | [plugins/jsonwebtoken/README.md](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md) |
| mongoose | [plugins/mongoose/README.md](https://github.com/Automattic/mongoose/blob/master/README.md) |
| morgan | [plugins/morgan/README.md](https://github.com/expressjs/morgan/blob/master/README.md) |
| nodemon | [plugins/nodemon/README.md](https://github.com/remy/nodemon/blob/master/README.md) |

### Client

| Plugin | README |
| ------ | ------ |
| axios | [plugins/axios/README.md](https://github.com/axios/axios/blob/master/README.md) |
| formik | [plugins/formik/README.md](https://github.com/formium/formik/blob/master/packages/formik/README.md) |
| next | [plugins/next/README.md](https://github.com/vercel/next.js/blob/canary/packages/next/README.md) |
| react | [plugins/react/README.md](https://github.com/facebook/react/blob/master/README.md) |
| react-quill | [plugins/react-quill/README.md](https://github.com/zenoamaro/react-quill/blob/master/README.md) |
| react-tagsinput | [plugins/react-tagsinput/README.md](https://github.com/olahol/react-tagsinput/blob/master/README.md) |
| yup | [plugins/yup/README.md](https://github.com/reduxjs/redux)|
| postcss | [plugins/postcss/README.md](https://github.com/postcss/postcss/blob/main/README.md)|

## Core Structure
    code
      ├── package.json
      │
      ├── client
      │   ├── components
      │   ├── constants
      │   ├── context
      │   ├── hooks
      │   ├── layout
      │   ├── pages
      │   ├── public
      │   ├── styles
      │   ├── utils
      │   └── package.json
      │
      ├── server 
      │   ├── src
      │   │   ├── config
      │   │   ├── controllers
      │   │   ├── middleware
      │   │   ├── models
      │   │   ├── routes
      │   │   ├── utils
      │   │   └── server.js
      ├── .gitignore
      └── README.md


### Screenshots


|                                        Home                                        |                                        Detail                                        |                                        Tags                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Ren0503/magnifier-js-forum/blob/master/client/public/screenshots/home.png) | ![](https://github.com/Ren0503/magnifier-js-forum/blob/master/client/public/screenshots/detail.png) | ![](https://github.com/Ren0503/magnifier-js-forum/blob/master/client/public/screenshots/tags.png) |

|                                        Users                                        |                                        Profile                                        |                                        Ask                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Ren0503/magnifier-js-forum/blob/master/client/public/screenshots/users.png) | ![](https://github.com/Ren0503/magnifier-js-forum/blob/master/client/public/screenshots/profile.png) | ![](https://github.com/Ren0503/magnifier-js-forum/blob/master/client/public/screenshots/ask.png) |