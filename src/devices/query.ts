/* 
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { Api } from "./api";
import { QueryType } from "./types";

export class Query {

	constructor(private _api: Api, options: QueryType) {
        for(var key in options) {
            this[key] = options[key];
        }

		this._api = null; //deleteme
    }
}
export interface Query extends QueryType {}