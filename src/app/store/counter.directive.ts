//  the custom directive yields a series of numbers that can be used to create the page navication buttons
//  applied to elements through a counter property. Rather than yield an object in a collection, 
// deletes all the content it created and starts again when the number of pages changes

import { Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges } from "@angular/core";

@Directive({
    selector: "[counterOf]"
})

export class CounterDirective {

    constructor(private container: ViewContainerRef,
        private template: TemplateRef<Object>) {
    }

    @Input("counterOf")
    counter: number;

    ngOnChanges(changes: SimpleChanges) {
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, 
                new CounterDirectiveContext(i + 1));
        }
    }
}

class CounterDirectiveContext {
    constructor(public $implicit: any) { }
}