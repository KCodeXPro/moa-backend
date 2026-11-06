import { GoogleStrategy } from './google.strategy';
export declare class AuthController {
    private readonly googleStrategy;
    constructor(googleStrategy: GoogleStrategy);
    googleLogin(body: {
        token: string;
    }): Promise<any>;
}
