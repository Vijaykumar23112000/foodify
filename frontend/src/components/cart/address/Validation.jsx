import * as Yup from 'yup'

export const validation = Yup.object({
    streetAddress: Yup.string().required("street address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"),
    city: Yup.string().required("City is required")
})