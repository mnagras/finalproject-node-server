var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var productListAPIRouter = require("./routes/productListAPI");
var productAPIRouter = require("./routes/productAPI");
var usersRouter = require('./routes/users');
var reviewsRouter = require('./routes/reviews');
var followersRouter = require('./routes/followers');
var usersRecentRouter = require('./routes/usersRecent');
var reviewsRecentRouter = require('./routes/reviewsRecent');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/productListAPI", productListAPIRouter);
app.use("/productAPI", productAPIRouter);
app.use("/reviews", reviewsRouter);
app.use("/followers", followersRouter);
app.use("/users/recent", usersRecentRouter);
app.use("/reviews/recent", reviewsRecentRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
