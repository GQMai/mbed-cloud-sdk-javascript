import { Repository } from "../../../common/repository";
import { apiWrapper } from "../../../legacy/common/functions";
import { CampaignStatisticsEventsAdapter } from "../../index";
import { CampaignStatisticsEvents } from "./campaignStatisticsEvents";
/**
 *CampaignStatisticsEvents repository
 */
export class CampaignStatisticsEventsRepository extends Repository {
    /**
     * read
     * @param campaignId - ID of the associated campaign.
     * @param id - id
     * @param summaryStatusId - summaryStatusId
     */
    public read(campaignId: string, id: string, summaryStatusId: string): Promise<CampaignStatisticsEvents> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url:
                            "/v3/update-campaigns/{campaign_id}/statistics/{summary_status_id}/event_types/{event_type_id}",
                        method: "GET",
                        pathParams: {
                            campaign_id: campaignId,
                            event_type_id: id,
                            summary_status_id: summaryStatusId,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, CampaignStatisticsEventsAdapter.fromApi(data));
            }
        );
    }
}
