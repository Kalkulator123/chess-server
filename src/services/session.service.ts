export class Session {
    private _id: string | undefined;
    private readonly characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    private generateId(length: number): string {
        let result = '';

        for (let i = 0; i < this.characters.length; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        }

        return result;
    }

    public id(): string {
        return this._id ? this._id : this.generateId(20);
    }
}