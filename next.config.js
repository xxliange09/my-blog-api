/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        "source": "/(.*)",
        "headers": [
          {
            "key": "Access-Control-Allow-Origin",
            "value": "*"
          },
          {
            "key": "Access-Control-Allow-Headers",
            "value": "content-type"
          },
          {
            "key": "Access-Control-Allow-Methods",
            "value": "DELETE,PUT,POST,GET,OPTIONS"
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      {
        "source": "/",
        "destination": "/api/query-all-users"
      }
    ]
  }
}
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   headers: [
//     {
//       "source": "/(.*)",
//       "headers": [
//         {
//           "key": "Access-Control-Allow-Origin",
//           "value": "*"
//         },
//         {
//           "key": "Access-Control-Allow-Headers",
//           "value": "content-type"
//         },
//         {
//           "key": "Access-Control-Allow-Methods",
//           "value": "DELETE,PUT,POST,GET,OPTIONS"
//         }
//       ]
//     }
//   ],
//   rewrites: [
//     {
//       "source": "/",
//       "destination": "/api/query-all-users"
//     }
//   ]
// }

// module.exports = nextConfig


/**
 * module.exports = {

    async rewrites() {
        return [
                source: '/jshERP-boot/:slug*',
                destination: `http://localhost:3001/jshERP-boot/:slug*`,
            },


        ]
    },
}

作者：用户4496051260335
链接：https://juejin.cn/post/7156112718246707230
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */