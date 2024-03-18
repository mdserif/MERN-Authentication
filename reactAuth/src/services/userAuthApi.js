import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
  endpoints: (builder) => ({

    userRegistration: builder.mutation({
      query: (user) => {
        // user carries the data from frontend , in this case it is actualData
        return{
            url:'register', // this is the endpoint
            method: 'POST',
            body: user,
            headers:{
                'content-type':'application/json',
            }
        }
      },
    }),

    userLogin: builder.mutation({
        query:(user)=>{
            return{
                url: 'login',
                method: 'POST',
                body : user,
                headers:{
                    'content-type':'application/json'
                }
            }
        }
    }),

    sendPasswordResetEmail: builder.mutation({
      query:(user)=>{
          return{
              url: 'send-reset-password-email',
              method: 'POST',
              body : user,
              headers:{
                  'content-type':'application/json'
              }
          }
      }
    })
  }),
})

export const { useUserRegistrationMutation, useUserLoginMutation, useSendPasswordResetEmailMutation } = userAuthApi

// base url is the backend base url 