FROM clux/muslrust

WORKDIR /usr/src/myapp
COPY . .

RUN cargo install --path resume/
