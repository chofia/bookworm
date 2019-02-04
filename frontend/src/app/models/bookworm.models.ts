class BookWorm {
    _id:string;
    title: string;
    author: string;
    date: Date;
    status: string;

    constructor(
        ){
            this.title = ""
            this.author = ""
            this.date = new Date()
            this.status = ""
        }
}

export default BookWorm;
