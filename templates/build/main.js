webpackJsonp([5],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuluPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MuluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MuluPage = /** @class */ (function () {
    function MuluPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.mulu = this.navParams.get("mulu");
    }
    MuluPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MuluPage');
    };
    MuluPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MuluPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mulu',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\mulu\mulu.html"*/'<!--\n  Generated template for the MuluPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>目录</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-list class="mulu-list">\n    <ion-item *ngFor="let item of mulu"  >\n      {{item}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\mulu\mulu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], MuluPage);
    return MuluPage;
}());

//# sourceMappingURL=mulu.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__check_order_check_order__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_page_editRemove__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var goods = [];
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, alertCtrl, modalCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.cartGoods = [
            { bookid: '1', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book4.jpg', nums: 1, price: 12.5 },
            { bookid: '2', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book5.jpg', nums: 1, price: 16.5 },
            { bookid: '3', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book3.jpg', nums: 1, price: 11.6 },
            { bookid: '4', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book4.jpg', nums: 1, price: 12.5 },
            { bookid: '5', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book5.jpg', nums: 1, price: 16.5 },
            { bookid: '6', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book3.jpg', nums: 1, price: 11.6 },
            { bookid: '7', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book4.jpg', nums: 1, price: 12.5 },
            { bookid: '8', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book5.jpg', nums: 1, price: 16.5 },
            { bookid: '9', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book3.jpg', nums: 1, price: 11.6 },
            { bookid: '10', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book4.jpg', nums: 2, price: 12.5 },
            { bookid: '11', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book5.jpg', nums: 1, price: 16.5 },
            { bookid: '12', name: '好书一本', author: '高手', imgSrc: 'assets/imgs/book3.jpg', nums: 0, price: 11.6 },
        ];
        this.showToTop = false;
    }
    Object.defineProperty(CartPage.prototype, "allPrice", {
        get: function () {
            var _this = this;
            this.mayNotWantBooks = [];
            var nothing = true;
            var sum = 0;
            this.cartGoods.forEach(function (ele) {
                if (ele.nums > 0) {
                    nothing = false;
                }
                else {
                    _this.mayNotWantBooks.push(ele);
                }
                if (ele['selected']) {
                    sum = sum + (ele.price * 1000 * ele.nums);
                }
            });
            sum = sum / 1000;
            return { sum: sum, nothing: nothing };
        },
        enumerable: true,
        configurable: true
    });
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.toBookPage = function (item) {
        var book = { name: item.name, author: item.author, src: item['imgSrc'] };
        console.log(book);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__book_book__["a" /* BookPage */], { book: book });
    };
    CartPage.prototype.allChange = function (checked) {
        this.cartGoods.forEach(function (ele) {
            if (ele.nums > 0) {
                ele['selected'] = checked;
            }
        });
    };
    CartPage.prototype.hhahaScroll = function (event) {
        var _this = this;
        this.zone.run(function () {
            if (event.scrollTop >= 200) {
                _this.showToTop = true;
            }
            else {
                _this.showToTop = false;
            }
        });
    };
    CartPage.prototype.toTop = function () {
        this.content.scrollTo(0);
    };
    CartPage.prototype.toCheckOrderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__check_order_check_order__["a" /* CheckOrderPage */], { orderList: this.cartGoods });
    };
    CartPage.prototype.openAlert = function () {
        var _this = this;
        var message;
        var buttons;
        if (this.mayNotWantBooks.length > 0) {
            message = "\u60A8\u5C06\u4ECE\u8D2D\u7269\u8F66\u6E05\u626B" + this.mayNotWantBooks.length + "\u6B3E\u56FE\u4E66\u5546\u54C1\u54E6\uFF01";
            buttons = [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '详情',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_page_editRemove__["a" /* EditRemovePage */], { removeBooks: _this.mayNotWantBooks });
                        console.log(_this.mayNotWantBooks);
                        modal.present();
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ];
        }
        else {
            message = '您没有需要清扫出去的图书哦！';
            buttons = ['取消'];
        }
        var confirm = this.alertCtrl.create({
            title: '清扫小助手对您说：',
            message: message,
            buttons: buttons
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], CartPage.prototype, "content", void 0);
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>购物车</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openAlert()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content (ionScroll)="hhahaScroll($event)">\n  <ion-list no-lines>\n    <ion-item *ngFor="let item of cartGoods"  (click)="toBookPage(item)" [ngStyle]="{\'background\': item.nums>0?\'none\':\'#ECECEC\'}">\n      <div item-start class="checkbox-box">\n          <ion-checkbox [(ngModel)]="item.selected"  [disabled]="!item.nums" ></ion-checkbox>\n        </div>\n        <div class="book" item-end >\n            <div class="img-box">\n                <img [src]="item.imgSrc" alt="">\n            </div>\n            <div class="info">\n                <span>书名： {{item.name}}</span>\n                <span>作者: {{item.author}}</span>\n                <div>\n                  <span class="price-fuhao">￥</span>\n                  <span class="price-jiage">{{item.price}}</span>\n                </div>\n                <div class="nums-modify" (click)="$event.stopPropagation()">\n                  <span>购买数量：</span>\n                  <button class="remove-nums" clear ion-button icon-only color="secondary"  (click)="item.nums = item.nums===0?0:item.nums-1;item.selected=item.nums>0?item.selected:false">\n                    <ion-icon name="remove"></ion-icon>\n                  </button>\n\n                    <input type="number" disabled [value]=item.nums>\n\n\n                  <button class="add-nums" clear ion-button icon-only color="danger" (click)="item.nums = item.nums-0+1">\n                      <ion-icon name="add"></ion-icon>\n                  </button>\n                </div>\n            </div>\n\n          </div>\n\n    </ion-item>\n\n  </ion-list>\n  <div class="all-price">\n    <div class="all-select">\n        <ion-checkbox #c [checked]="allPrice.nothing===true?false:c.checked" (ionChange)="allChange(c.checked)" [disabled]="allPrice.nothing" ></ion-checkbox>\n        <span>全选</span>\n    </div>\n\n    <div>\n        <span>合计:</span>\n        <span *ngIf="allPrice.sum>0">￥{{allPrice.sum}}</span>\n    </div>\n    <button ion-button (click)="toCheckOrderPage()">去付款</button>\n\n  </div>\n  <button *ngIf="showToTop" ion-button (click)="toTop()" color="light" icon-only class="to-top">\n      <ion-icon name="arrow-round-up"></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheckOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckOrderPage = /** @class */ (function () {
    function CheckOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderList = [];
        this.orderList = this.navParams.get('orderList');
        console.log('orderList', this.orderList);
    }
    CheckOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckOrderPage');
    };
    CheckOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-check-order',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\check-order\check-order.html"*/'<!--\n  Generated template for the CheckOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>确认订单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list >\n    <ion-item *ngFor="let item of orderList">\n      <ion-list no-lines>\n        <ion-item >\n            <img item-start [src]="item.imgSrc" alt="">\n            <div  class="book-info">\n              <p>书名：{{item.name}}</p>\n              <P>作者：{{item.author}}</P>\n              <p>定价：￥{{item.price}}</p>\n              <p>数量：{{item.nums}}</p>\n            </div>\n        </ion-item>\n\n      </ion-list>\n\n\n\n\n\n    </ion-item>\n  </ion-list>\n  <div class="sum">\n      <button ion-button icon-right full  color="light" class="songhuo-btn">\n          <span item-start>送货方式</span>\n          <span item-end>免邮</span>\n          <ion-icon name="arrow-forward" color="primary"></ion-icon>\n      </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\check-order\check-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CheckOrderPage);
    return CheckOrderPage;
}());

//# sourceMappingURL=check-order.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/book/book.module": [
		682,
		4
	],
	"../pages/cart/cart.module": [
		683,
		3
	],
	"../pages/check-order/check-order.module": [
		684,
		2
	],
	"../pages/fukuan/fukuan.module": [
		685,
		1
	],
	"../pages/mulu/mulu.module": [
		686,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRemovePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var goods = [];
var EditRemovePage = /** @class */ (function () {
    function EditRemovePage(viewCtrl, alertCtrl, navParams, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dontRemoveCnt = 0;
        this.removeBooks = this.navParams.get('removeBooks');
        this.removeBooks.forEach(function (element) {
            element.dontRemove = false;
            element.hide = false;
        });
        console.log(this.removeBooks);
    }
    EditRemovePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditRemovePage.prototype.doMore = function () {
        var _dontRemoveCnt = 0;
        this.removeBooks.forEach(function (element) {
            if (element.dontRemove) {
                _dontRemoveCnt++;
            }
        });
        this.dontRemoveCnt = _dontRemoveCnt;
    };
    EditRemovePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    EditRemovePage.prototype.remove = function () {
        if (this.dontRemoveCnt === this.removeBooks.length) {
            var confirm_1 = this.alertCtrl.create({
                message: '您啥也没有选中 :)',
            });
            confirm_1.present();
        }
        this.presentLoading();
        var temp = this.removeBooks.filter(function (ele) { return !ele.dontRemove; });
        temp.forEach(function (ele) {
            ele.hide = true;
        });
        console.log('temp', temp);
    };
    EditRemovePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editRemove',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\cart\modal-page\editRemove.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>清扫列表</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ng-container *ngFor="let ele of removeBooks">\n        <ion-item [hidden]="ele.hide">\n            <ion-checkbox #c checked="true" (ionChange)="ele.dontRemove = !c.checked; doMore()"></ion-checkbox>\n            <ion-label>\n              <img [src]="ele.imgSrc" alt="">\n              <div>\n                <p>\n                  书名：{{ele.name}}\n                </p>\n                <p>作者：{{ele.author}}</p>\n                <p>定价：￥{{ele.price}}</p>\n              </div>\n            </ion-label>\n          </ion-item>\n    </ng-container>\n\n  </ion-list>\n  <div class="remove">\n    <ion-item>\n      <span>共有{{removeBooks.length}}项。 </span>\n      <span>您取消了{{dontRemoveCnt}}项</span>\n      <button ion-button color="danger" item-end (click)="remove()">清扫</button>\n    </ion-item>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\cart\modal-page\editRemove.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditRemovePage);
    return EditRemovePage;
}());

//# sourceMappingURL=editRemove.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\about\about.html"*/'\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, renderer, zone) {
        this.navCtrl = navCtrl;
        this.renderer = renderer;
        this.zone = zone;
        this.bannerImgs = ["url(\"assets/imgs/banner.jpg\")", "url(\"assets/imgs/banner.jpg\")", "url(\"assets/imgs/banner.jpg\")"];
        this.haha = 1;
        this.icontypes = [
            { icon_name: 'sports', name: '运动' },
            { icon_name: 'eng', name: '外文' },
            { icon_name: 'child', name: '儿童' },
            { icon_name: 'bungaku', name: '文学' },
            { icon_name: 'gijuzu', name: '艺术' },
            { icon_name: 'skill', name: '科技' },
            { icon_name: 'history', name: '历史' },
            { icon_name: 'shakai', name: '社会' },
        ];
        this.typeLists = [
            {
                typeName: "hot", books: [
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                ]
            },
            {
                typeName: "new", books: [
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                ]
            },
            {
                typeName: "文学", books: [
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                ]
            },
            {
                typeName: "历史", books: [
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                ]
            },
            {
                typeName: "外语", books: [
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book4.jpg' },
                    { name: "好书一本", author: "超级作家", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈磊", src: 'assets/imgs/book5.jpg' },
                    { name: "好书一本", author: "陈良虎", src: 'assets/imgs/book3.jpg' },
                ]
            },
        ];
        this.op = "rgba(255,255,255,0)";
    }
    HomePage.prototype.toBookPage = function (book) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__book_book__["a" /* BookPage */], { book: book });
    };
    HomePage.prototype.toCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.hhahaScroll = function (event) {
        var _this = this;
        if (event.scrollTop >= 160) {
            this.op = "rgba(255,255,255,1)";
            this.sw = true;
            this.renderer.setStyle(this.header.nativeElement, 'background', this.op);
        }
        else {
            this.sw = false;
            var op = Math.floor(event.scrollTop / 160 * 100) / 100;
            this.op = "rgba(255,255,255," + op + ")";
            this.renderer.setStyle(this.header.nativeElement, 'background', this.op);
        }
        this.zone.run(function () {
            _this.sw = !!_this.sw;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('header'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "header", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\home\home.html"*/'\n\n<ion-content (ionScroll)="hhahaScroll($event)">\n\n  <header #header class="header-box"  [ngClass]="{\'header-box-border\': sw,\'header-box-border-none\':!sw}">\n    <div class="search-box" [ngClass]="{\'search-box-sw\': sw,\'search-box-sw-none\':!sw}" >\n        <ion-icon name="search" [color]="sw?\'primary\':\'secondary\'"></ion-icon>\n        <ion-input   class="search" [ngClass]="{\'input-sw\': sw,\'input-sw-none\':!sw}" type="text" placeholder="作者/书名/出版社"></ion-input>\n    </div>\n    <button (click)="toCartPage()" ion-button icon-only clear [ngClass]="{\'icon-btn\': !sw,\'icon-btn-op1\':sw}" >\n      <ion-icon name="cart" [color]="sw?\'primary\':\'light\'"></ion-icon>\n    </button>\n    <button ion-button icon-only clear [ngClass]="{\'icon-btn\': !sw,\'icon-btn-op1\':sw}" >\n      <ion-icon name="list" [color]="sw?\'primary\':\'light\'"></ion-icon>\n    </button>\n\n  </header>\n\n    <div class="banner">\n        <ion-slides autoplay="3000" loop="true" pager="true">\n            <ion-slide *ngFor="let item of bannerImgs">\n              <div [ngStyle]="{\'background-image\':item}"></div>\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n    <div class="tuijian">\n      <div class="major">\n        <span>\n          好书推荐\n          <i>415力荐 超值好书</i>\n        </span>\n\n        <img src="assets/imgs/book1.jpg" alt="">\n      </div>\n      <div class="other">\n        <div class="top100">\n          <span>TOP100\n              <i>排行榜100的好书</i>\n          </span>\n\n          <img src="assets/imgs/book2.jpg" alt="">\n        </div>\n        <div class="newbook">\n          <span>新到图书\n              <i>财务自由之路</i>\n          </span>\n\n          <img src="assets/imgs/book2.jpg" alt="">\n        </div>\n      </div>\n    </div>\n    <div class="type-select">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3 *ngFor="let icontype of icontypes">\n            <div class="type-tubiao-set">\n\n              <ion-icon color="primary" [name]="icontype.icon_name"></ion-icon>\n              <p>{{icontype.name}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ng-container *ngFor="let group of typeLists">\n        <div class="rexiao" *ngIf="group.typeName === \'hot\' || group.typeName === \'new\'">\n            <div class="title">\n              <button ion-button   full [color]="group.typeName === \'hot\'?\'danger\':\'primary\'" icon-start>\n                <ion-icon [name]="group.typeName === \'hot\'? \'bonfire\':\'car\'"  class="books-type-icon"></ion-icon>\n                <span>{{group.typeName === \'hot\'?\'热销图书\':\'新到好书\'}}</span>\n                <ion-icon  name="arrow-dropright" class="more-books-icon"></ion-icon>\n              </button>\n\n              </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4 *ngFor="let book of group.books"  (click)="toBookPage(book)">\n\n                      <img [src]="book.src" alt="" class="book-item-img">\n                      <p class="book-name">{{book.name}}</p>\n                      <p class="author">{{book.author}}</p>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <div class="type-list" *ngIf="group.typeName!==\'hot\' && group.typeName!==\'new\' " >\n            <div class="title">\n                <button ion-button  full clear icon-start>\n                    <ion-icon name="book"  class="books-type-icon"></ion-icon>\n                    <span>{{group.typeName}}</span>\n                    <ion-icon  name="arrow-dropright" class="more-books-icon"></ion-icon>\n                  </button>\n\n            </div>\n            <div class="content">\n              <ion-scroll scrollX="true" class="scroll1">\n                <div class="book-con">\n                  <div *ngFor="let book of group.books" class="book-item" (click)="toBookPage(book)">\n                      <img [src]="book.src" alt="">\n                      <p class="book-name">{{book.name}}</p>\n                      <p class="author">{{book.author}}</p>\n                  </div>\n                </div>\n              </ion-scroll>\n\n\n            </div>\n          </div>\n\n    </ng-container>\n\n</ion-content>\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FukuanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FukuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FukuanPage = /** @class */ (function () {
    function FukuanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FukuanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FukuanPage');
    };
    FukuanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fukuan',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\fukuan\fukuan.html"*/'<!--\n  Generated template for the FukuanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\fukuan\fukuan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FukuanPage);
    return FukuanPage;
}());

//# sourceMappingURL=fukuan.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_book_book__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mulu_mulu__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_modal_page_editRemove__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fukuan_fukuan__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_check_order_check_order__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_rest_api_rest_api__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mulu_mulu__["a" /* MuluPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_fukuan_fukuan__["a" /* FukuanPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_check_order_check_order__["a" /* CheckOrderPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cart_modal_page_editRemove__["a" /* EditRemovePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: 'true',
                    iconMode: 'ios',
                }, {
                    links: [
                        { loadChildren: '../pages/book/book.module#BookPageModule', name: 'BookPage', segment: 'book', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check-order/check-order.module#CheckOrderPageModule', name: 'CheckOrderPage', segment: 'check-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fukuan/fukuan.module#FukuanPageModule', name: 'FukuanPage', segment: 'fukuan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mulu/mulu.module#MuluPageModule', name: 'MuluPage', segment: 'mulu', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mulu_mulu__["a" /* MuluPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_fukuan_fukuan__["a" /* FukuanPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_check_order_check_order__["a" /* CheckOrderPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cart_modal_page_editRemove__["a" /* EditRemovePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_rest_api_rest_api__["a" /* RestApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CONFIG = 'dev';
var switchUrl = {
    dev: {
        getBookList_url: 'assets/mockData/bookList.json',
        postBookDetail_url: ''
    },
    pro: {
        getBookList_url: ''
    }
};
var apiUrl = switchUrl[CONFIG];
var RestApiProvider = /** @class */ (function () {
    function RestApiProvider(http) {
        this.http = http;
        this.bookListSubJect = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.userAuthoritySubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.userInfoSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.userCartDataSubjec = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.bookDetailSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        console.log('Hello RestApiProvider Provider');
    }
    RestApiProvider.prototype.getBookList = function () {
        var _this = this;
        this.http.get(apiUrl.getBookList_url)
            .retry(5)
            .subscribe(function (list) {
            _this.bookListCache = list;
            _this.bookListSubJect.next('success');
        });
    };
    RestApiProvider.prototype.watchBookList = function () {
        return this.bookListSubJect.asObservable();
    };
    RestApiProvider.prototype.getBookDetail = function (bookId) {
        this.http.post(apiUrl.postBookDetail_url, {
            bookId: bookId
        });
    };
    RestApiProvider.prototype.watchBookDetail = function () {
        return this.bookDetailSubject.asObservable();
    };
    RestApiProvider.prototype.signIn = function () {
    };
    RestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestApiProvider);
    return RestApiProvider;
}());

//# sourceMappingURL=rest-api.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mulu_mulu__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var mulu = [
    '第1回：宴桃园豪杰三结义 斩黄巾英雄首立功',
    '第2回：张翼德怒鞭督邮 何国舅谋诛宦竖',
    '第3回：议温明董卓叱丁原 馈金珠李肃说吕布',
    '第4回：废汉帝陈留践位 谋董贼孟德献刀',
    '第5回：发矫诏诸镇应曹公 破关兵三英战吕布',
    '第6回：焚金阙董卓行凶 匿玉玺孙坚背约',
    '第7回：袁绍磐河战公孙 孙坚跨江击刘表',
    '第8回：王司徒巧使连环计 董太师大闹凤仪亭',
    '第9回：除暴凶吕布助司徒 犯长安李傕听贾诩',
    '第10回：勤王室马腾举义 报父仇曹操兴师',
    '第11回：刘皇叔北海救孔融 吕温侯濮阳破曹操',
    '第12回：陶恭祖三让徐州 曹孟德大战吕布',
    '第13回：李傕郭汜大交兵 杨奉董承双救驾',
    '第14回：曹孟德移驾幸许都 吕奉先乘夜袭徐郡',
    '第15回：太史慈酣斗小霸王 孙伯符大战严白虎',
    '第16回：吕奉先射戟辕门 曹孟德败师淯水',
    '第17回：袁公路大起七军 曹孟德会合三将',
    '第18回：贾文和料敌决胜 夏侯惇拔矢啖睛',
    '第19回：下邳城曹操鏖兵 白门楼吕布殒命',
    '第20回：曹阿瞒许田打围 董国舅内阁受诏',
    '第21回：曹操煮酒论英雄 关公赚城斩车胄'
];
var BookPage = /** @class */ (function () {
    function BookPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.moreShow = false;
        this.book = this.navParams.get('book');
        console.log('bookpage', this.book);
    }
    BookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookPage');
        if (this.box1.nativeElement.scrollHeight <= this.con1.nativeElement.scrollHeight) {
            this.moreShow = true;
        }
    };
    BookPage.prototype.toMuluPage = function () {
        //this.navCtrl.push(MuluPage, {mulu})
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__mulu_mulu__["a" /* MuluPage */], { mulu: mulu });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('box'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BookPage.prototype, "box1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('con'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BookPage.prototype, "con1", void 0);
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"D:\mywebdesign\ionic-pro\bookstore\src\pages\book\book.html"*/'<!--\n  Generated template for the BookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>图书详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="headerbox">\n    <img [src]="book.src" alt="">\n    <p class="name">{{book.name}}</p>\n    <p class="author"><span>作者: </span> {{book.author}}</p>\n    <p class="jiage">￥21</p>\n    <p class="zhekou">\n      <span class="zhe">3.7折</span>\n      <span class="dixiao">\n        ￥57.99\n        <i></i>\n      </span>\n    </p>\n    <div class="caozuo">\n      <button ion-button outline>加入购物车</button>\n      <button ion-button>立即购买</button>\n    </div>\n  </div>\n  <div class="jianjie">\n      <h3 class="jianjie-title">内容简介</h3>\n\n\n    <div class="content-box" #box>\n      <p class="jianjie-content" [ngStyle]="{\'height\':!show? \'6.6rem\':\'auto\'}" #con>\n        这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事， 这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事， 这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，\n        这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事， 这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事， 这是一个动人的故事，这是一个动人的故事，这是一个动人的故事。\n        这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事， 这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事， 这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，\n        这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事， 这是一个动人的故事，这是一个动人的故事，这是一个动人的故事，这是一个动人的故事， 这是一个动人的故事，这是一个动人的故事，这是一个动人的故事。\n\n      </p>\n    </div>\n\n    <button (click)="show = !show " *ngIf="moreShow" ion-button icon-end class="jianjie-more" full clear>\n        {{show?\'back...\':\'...read more\'}}\n        <ion-icon  [name]="show?\'arrow-up\':\'arrow-down\'" ></ion-icon>\n\n      </button>\n\n\n  </div>\n  <div class="mulu">\n    <button ion-button icon-end clear full (click)="toMuluPage()">\n      查看目录\n      <ion-icon name="arrow-dropright"></ion-icon>\n    </button>\n  </div>\n  <div class="info">\n    <h3>图书信息</h3>\n    <ion-list>\n      <ion-item>\n        <span class="info-author">作者：</span>\n        <span>(德)赫尔曼，等</span>\n      </ion-item>\n      <ion-item>\n        <span>出版方：</span>\n        <span>天津人民出版社</span>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-8>\n              <span>ISBN：</span>\n              <span>9893783743938493</span>\n            </ion-col>\n            <ion-col col-4>\n              <span>版次：</span>\n              <span>1</span>\n            </ion-col>\n            <ion-col col-8>\n              <span>包装：</span>\n              <span>平装</span>\n            </ion-col>\n            <ion-col col-4>\n              <span>开本：</span>\n              <span>16开</span>\n            </ion-col>\n            <ion-col col-8>\n              <span>用纸：</span>\n              <span>胶版纸</span>\n            </ion-col>\n            <ion-col col-4>\n              <span>页数：</span>\n              <span>436</span>\n            </ion-col>\n            <ion-col col-8>\n              <span>字数：</span>\n              <span>280000</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="shuping"></div>\n\n</ion-content>\n'/*ion-inline-end:"D:\mywebdesign\ionic-pro\bookstore\src\pages\book\book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map