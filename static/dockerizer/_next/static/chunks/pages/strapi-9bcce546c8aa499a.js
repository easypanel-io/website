(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[704],{8651:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/strapi",function(){return o(2483)}])},2483:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return f}});var t=o(5893),a=o(6828),r=o(2152),l=o(5784),i=o(2985),d=o(1604),s=JSON.parse('{"i":"# Creating multi-stage build for production\\nFROM node:{{nodeVersion}}-alpine AS build\\nRUN apk update && apk add --no-cache {{buildStagePackages}} > /dev/null 2>&1\\nENV NODE_ENV=production\\n\\nWORKDIR /opt/\\nCOPY package.json yarn.lock ./\\nRUN yarn global add node-gyp\\n\\nRUN yarn config set network-timeout 600000 -g && yarn install --{{nodeEnv}}\\nENV PATH /opt/node_modules/.bin:$PATH\\nWORKDIR /opt/app\\nCOPY . .\\nRUN yarn build\\n\\n# Creating final production image\\nFROM node:{{nodeVersion}}-alpine AS build\\nRUN apk add --no-cache {{productionStagePackages}}\\nENV NODE_ENV=production\\nWORKDIR /opt/\\nCOPY --from=build /opt/node_modules ./node_modules\\nWORKDIR /opt/app\\nCOPY --from=build /opt/app ./\\nENV PATH /opt/node_modules/.bin:$PATH\\n\\nRUN chown -R {{user}}:{{user}} /opt/app\\nUSER {{user}}\\nEXPOSE {{port}}\\nCMD [\\"yarn\\", \\"start\\"]"}');let u=d.z.object({nodeVersion:d.z.string().default("18"),buildStagePackages:d.z.string().default("build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git"),productionStagePackages:d.z.string().default("vips-dev"),user:d.z.string().default("node"),port:d.z.string().default("1337")}),p=["16","18","20"],c=u.parse({});var g=o(6312),b=o(7536);function f(){let n=(0,b.cI)({resolver:(0,g.F)(u),defaultValues:c});return(0,t.jsx)(a.u,{title:"Strapi",getFiles:()=>(function(n){let e=u.parse(n);return{Dockerfile:(0,i.renderString)(s.i,e)}})(n.getValues()),children:(0,t.jsxs)(r.l0,{...n,children:[(0,t.jsx)(l.ih,{control:n.control,name:"nodeVersion",label:"Node version",options:p}),(0,t.jsx)(l.yt,{control:n.control,name:"buildStagePackages",label:"Build stage packages",inputProps:{placeholder:c.buildStagePackages}}),(0,t.jsx)(l.yt,{control:n.control,name:"productionStagePackages",label:"Production packages",inputProps:{placeholder:"vips-dev"}}),(0,t.jsx)(l.yt,{control:n.control,name:"user",label:"User",inputProps:{placeholder:"node"}}),(0,t.jsx)(l.yt,{control:n.control,name:"port",label:"Port",inputProps:{placeholder:"1337"}})]})})}}},function(n){n.O(0,[429,390,283,298,774,888,179],function(){return n(n.s=8651)}),_N_E=n.O()}]);