import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";
import { IApiResponse } from "../models/common.model";

@Service()
export class Master {
    http = inject(HttpClient)

    getAllVehicles(): Observable<IApiResponse> {
        return this.http.get<IApiResponse>("https://freeapi.gerasim.in/api/CarRentalApp/GetCars")
    }

    onSaveBooking(obj: any): Observable<IApiResponse> {
        return this.http.post<IApiResponse>("https://freeapi.gerasim.in/api/CarRentalApp/CreateNewBooking", obj)
    }
}
