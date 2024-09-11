seninn fsdmk  ebeim sfoqmfkb asödn e vå sjr e uiimport { LightningElement, wire } from 'lwc';
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
