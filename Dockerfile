FROM alpine:latest
RUN apk add --no-cache git cmake make g++ libstdc++ libgcc openssl-dev hwloc-dev libuv-dev
RUN git clone https://github.com/xmrig/xmrig.git && \
    mkdir xmrig/build && cd xmrig/build && \
    cmake .. -DWITH_HTTPD=OFF && \
    make -j$(nproc)
WORKDIR /xmrig/build
ENTRYPOINT ["./xmrig"]


