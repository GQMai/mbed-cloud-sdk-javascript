// tslint:disable:no-console
import { SDK } from "../../../src";

describe("examples of certificate blacklist", () => {

    const myCertId = "016711e8061a5ad1ecb35f6800000000";

    test("blacklist a trusted certificate", async () => {
        try {
            // an example: certificate_black_listing
            const sdk = new SDK();

            const trustedCert = await sdk.foundation().trustedCertificateRepository().read(myCertId);

            trustedCert.status = "INACTIVE";

            await sdk.foundation().trustedCertificateRepository().update(trustedCert, trustedCert.id);

            const deviceList = sdk.foundation().deviceEnrollmentDenialRepository().list({ filter: { trustedCertificateId: trustedCert.id } });

            for await (const device of deviceList) {
                console.log(device.id);
            }
            // end of example
        } catch (e) {
            // currently expecting a 400 as feature has not been activated for account
        }
    });

    afterEach(async () => {
        const sdk = new SDK();

        const trustedCert = await sdk.foundation().trustedCertificateRepository().read(myCertId);

        if (trustedCert) {
            trustedCert.status = "ACTIVE";

            await sdk.foundation().trustedCertificateRepository().update(trustedCert, trustedCert.id);
        }
    });

});
