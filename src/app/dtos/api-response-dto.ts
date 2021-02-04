export class ApiResponseDto<T> {

    private _STATUS: string;
    private _MESSAGE: string;
    private _DATA: T;

    public get STATUS(): string {
        return this._STATUS;
    }

    public get MESSAGE(): string {
        return this._MESSAGE;
    }

    public get DATA(): T {
        return this._DATA;
    }

}