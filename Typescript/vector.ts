export class Vector {
    private elements: number[];

    constructor(n, k) {
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k))
        }
    }

    public getElements() {
        return this.elements;
    }

    public setElements(elements) {
        this.elements = elements;
    }

    public print() {
        console.log(this.elements);
    }

    public add(v1: Vector): Vector {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i] += v1.getElements()[i];
        }
        return this;
    }
    public subs(v1: Vector): Vector {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i] -= v1.getElements()[i];
        }
        return this;
    }
    public mult(v1: Vector): Vector {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i] *= v1.getElements()[i];
        }
        return this;
    }
    public multNumber(n: number): Vector {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i] *= n;
        }
        return this;
    }
}