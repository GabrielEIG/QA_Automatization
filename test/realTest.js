import { expect } from 'chai';

import { ArticleSelected } from "../tests/ArticleSelected.js";
import { AboutAdmin } from "../tests/AboutAdmin.js";
import { Contact } from '../tests/Contact.js';


describe("test selenium", function(){

    it("Article selected", async function() {
        const result = await ArticleSelected();
        expect(result).to.be.true; 
    });
    it("About Admin", async function() {
        const result = await AboutAdmin();
        expect(result).to.be.true; 
    });
    it("Contact", async function() {
        const result = await Contact();
        expect(result).to.be.true; 
    });
    
})


  