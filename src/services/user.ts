import { SqliteDatabase } from "@/core/db";
import UserModel from "@/models/user";
import { userRequest, UserLogin, userResponse } from "@/schemas/user";


class UserService {
    private dbSession: SqliteDatabase;

    constructor(dbSession: SqliteDatabase) {
        this.dbSession = dbSession;
    }

    async add(request: userRequest): Promise<userResponse> {
        
        const userModel = UserService.mapRequestToModel(request);

        const onDB = await UserModel.getByEmail(this.dbSession, userModel.email);
        if (onDB) {
            throw new Error("User already exists");
        }
        const newUser = await userModel.add(this.dbSession);
        return UserService.mapModelToResponse(newUser);
        }


    async login(request: UserLogin): Promise<userResponse | null> {
        
        const onDB = await UserModel.getByEmail(this.dbSession, request.email);
        if (!onDB) {
            return null;
        }
        if (onDB.password !== request.password) {
            return null;
        }
        return UserService.mapModelToResponse(onDB);

    }


    static mapRequestToModel(request: userRequest): UserModel {
        return new UserModel(
            0,
            request.username,
            request.email,
            request.password,
            true,
            new Date(),
            new Date()
        );
    }


    static mapModelToResponse(model: UserModel): userResponse {
        return {
            id: model.id,
            username: model.username,
            email: model.email,
            active: model.active,
            created_at: model.createdAt.toISOString(),
            updated_at: model.updatedAt.toISOString(),
        };
    }

}

export default UserService;