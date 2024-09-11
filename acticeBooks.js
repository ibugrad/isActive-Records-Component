ne fnfas fasjasö gellkfja smf masfas fPf dfsidf m ejnpasdnmimport { LightningElement, wire } from 'lwc';
import getBooks from '@salesforce/apex/BookUtility.amountOfBooks';
export default class acticeBooks extends LightningElement {
    @wire(getBooks)getbooklist;
    show=false;
    display(){
        if(this.show==true){
            this.show=false;
        }
        else if(this.show==false){
            this.show=true;
        }
    }
}
