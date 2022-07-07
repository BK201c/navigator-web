FROM node:16.15.1 AS build-stage
WORKDIR /opt/build
COPY . .
RUN npm install && \
  npm run build

# 基础镜像
FROM nginx:1.23.0-alpine

# 复制程序编译产物
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /opt/build/dist /usr/share/nginx/html

# 配置镜像基础参数
LABEL com.ffget.container.author="bk201c"

# 定义容器对外端口
EXPOSE 80

# 运行镜像时启动nginx服务
CMD ["nginx", "-g", "daemon off;"]