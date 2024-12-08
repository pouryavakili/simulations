import * as Yup from "yup"

export const validation = () => {
    const validationApolloDialog = Yup.object({
        title: Yup.string().required('Title is required'),
        number_customer: Yup.number()
          .required('Number of customers is required')
          .min(1, 'Must be at least 1'),
        email_body: Yup.string().required('Email body is required'),
      });
    return {
        validationApolloDialog
    }    
} 