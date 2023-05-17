export type PostData = {
    tenant: string;
    form_ref: string;
    created_at: string;
    comm_pref: Array<string>;
    form_data: {agencia: string, rnt: string, email: string, cellphone: string};
}
