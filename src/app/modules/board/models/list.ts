import { v4 as uuidv4 } from 'uuid';

export class BoardList {
    private id = uuidv4();
    public name: string;
    public cards = [];
    public createdDate = new Date();

    constructor(name: string) {
        this.name = name;
    }
}