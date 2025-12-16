import {
  MongoService,
  UserRepository,
  CryptoService,
  JwtService,
} from "../infra";
import { ResetPasswordUseCase } from "../applications";

export class ResetPasswordComposer {
  static async compose() {
    return new ResetPasswordUseCase(
      new UserRepository(await MongoService.getDb()),
      new CryptoService(),
      new JwtService()
    );
  }
}
