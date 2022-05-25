"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function() {
    function Vector(n, k) {
        this.elements = []
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k));
        }
    }
    Vector.prototype.getElements = function() {
        return this.elements;
    };
    Vector.prototype.setElements = function(elements) {
        this.elements = elements;
    };
    Vector.prototype.print = function() {
        console.log(this.elements);
    };
    Vector.prototype.add = function(v1) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] += v1.getElements()[i];
        }
        return this;
    };
    Vector.prototype.subs = function(v1) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] -= v1.getElements()[i];
        }
        return this;
    };
    Vector.prototype.mult = function(v1) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] *= v1.getElements()[i];
        }
        return this;
    };
    Vector.prototype.multNumber = function(n) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] *= n;
        }
        return this;
    };
    return Vector;
}());
exports.Vector = Vector;