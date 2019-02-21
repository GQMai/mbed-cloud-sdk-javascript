import { Config } from "../client/config";
import { AccountRepository } from ".";
import { ApiKeyRepository } from ".";
import { CertificateEnrollmentRepository } from ".";
import { CertificateIssuerRepository } from ".";
import { CertificateIssuerConfigRepository } from ".";
import { DeveloperCertificateRepository } from ".";
import { DeviceRepository } from ".";
import { DeviceEnrollmentRepository } from ".";
import { DeviceEnrollmentBulkCreateRepository } from ".";
import { DeviceEnrollmentBulkDeleteRepository } from ".";
import { DeviceEventsRepository } from ".";
import { ServerCredentialsRepository } from ".";
import { SubtenantTrustedCertificateRepository } from ".";
import { SubtenantUserRepository } from ".";
import { SubtenantUserInvitationRepository } from ".";
import { TrustedCertificateRepository } from ".";
import { UserRepository } from ".";
import { UserInvitationRepository } from ".";

export class Factory {
    private readonly _config: Config;
    constructor(config: Config) {
        this._config = config;
    }
    public accountRepository(): AccountRepository {
        return new AccountRepository(this._config);
    }
    public apiKeyRepository(): ApiKeyRepository {
        return new ApiKeyRepository(this._config);
    }
    public certificateEnrollmentRepository(): CertificateEnrollmentRepository {
        return new CertificateEnrollmentRepository(this._config);
    }
    public certificateIssuerRepository(): CertificateIssuerRepository {
        return new CertificateIssuerRepository(this._config);
    }
    public certificateIssuerConfigRepository(): CertificateIssuerConfigRepository {
        return new CertificateIssuerConfigRepository(this._config);
    }
    public developerCertificateRepository(): DeveloperCertificateRepository {
        return new DeveloperCertificateRepository(this._config);
    }
    public deviceRepository(): DeviceRepository {
        return new DeviceRepository(this._config);
    }
    public deviceEnrollmentRepository(): DeviceEnrollmentRepository {
        return new DeviceEnrollmentRepository(this._config);
    }
    public deviceEnrollmentBulkCreateRepository(): DeviceEnrollmentBulkCreateRepository {
        return new DeviceEnrollmentBulkCreateRepository(this._config);
    }
    public deviceEnrollmentBulkDeleteRepository(): DeviceEnrollmentBulkDeleteRepository {
        return new DeviceEnrollmentBulkDeleteRepository(this._config);
    }
    public deviceEventsRepository(): DeviceEventsRepository {
        return new DeviceEventsRepository(this._config);
    }
    public serverCredentialsRepository(): ServerCredentialsRepository {
        return new ServerCredentialsRepository(this._config);
    }
    public subtenantTrustedCertificateRepository(): SubtenantTrustedCertificateRepository {
        return new SubtenantTrustedCertificateRepository(this._config);
    }
    public subtenantUserRepository(): SubtenantUserRepository {
        return new SubtenantUserRepository(this._config);
    }
    public subtenantUserInvitationRepository(): SubtenantUserInvitationRepository {
        return new SubtenantUserInvitationRepository(this._config);
    }
    public trustedCertificateRepository(): TrustedCertificateRepository {
        return new TrustedCertificateRepository(this._config);
    }
    public userRepository(): UserRepository {
        return new UserRepository(this._config);
    }
    public userInvitationRepository(): UserInvitationRepository {
        return new UserInvitationRepository(this._config);
    }
}