import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    contact: string;
    name: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    callNow(number: string): Promise<void>;
    getAddress(): Promise<string>;
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getOpeningHours(): Promise<string>;
    getPhoneNumber(): Promise<string>;
    initiateWhatsApp(number: string): Promise<void>;
    openGoogleMaps(location: string): Promise<void>;
    submitContactForm(name: string, contact: string, message: string): Promise<void>;
}
