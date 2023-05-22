/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, } from 'react-native';
import Header from './src/Components/Header';
import ImageAndTextCard from './src/Components/ImageAndTextCard';
import PeronalDetails from './src/Components/personalDetails';
import QuestionAnswerCards from './src/Components/QuestionAnswerCards';
import axios from 'axios';



function App(): JSX.Element {
  const [responseData, setResponseData] = useState<any>()

  async function useGetAllDetailsRequest<T>() {
    const config = {
      headers: { Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk'}` }
    };

    try {
      const response: any = await axios.get<T>(`http://18.142.153.136:3000/api/application/member_details?id=5`, config);
      setResponseData(response?.data?.data)
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    useGetAllDetailsRequest()
  }, []);



  const familyDetailsList = [
    {
      id: 1,
      fieldName: 'Family Member Name',
      fieldValue: responseData?.member_personal_details.family[0].mf_name
    },
    {
      id: 2,
      fieldName: 'Family Member CNIC',
      fieldValue: responseData?.member_personal_details?.family[0]?.mf_cnic
    },
    {
      id: 3,
      fieldName: 'Religion',
      fieldValue: responseData?.member_personal_details?.mreligion
    },
    {
      id: 4,
      fieldName: 'Is Disable',
      fieldValue: responseData?.member_personal_details?.is_disable
    },
    {
      id: 5,
      fieldName: 'Business Address',
      fieldValue: responseData?.member_personal_details?.address?.city
    },
  ]

  const paymentDetails = [
    {
      id: 1,
      fieldName: 'Request Amount',
      fieldValue: responseData?.member_personal_details?.income
    },
    {
      id: 2,
      fieldName: 'Category',
      fieldValue: 'Category'
    },
    {
      id: 3,
      fieldName: 'Purpose',
      fieldValue: 'Purpose'
    },
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      <ScrollView>
        <ImageAndTextCard nameOfPerson={responseData?.member_personal_details?.first_name} cnicNumber={responseData?.member_personal_details.cnic} imagePath={responseData?.member_personal_details.profile_pic} />
        <PeronalDetails gender={responseData?.member_personal_details?.gender} maritalStatus={responseData?.member_personal_details?.marital_status}
          parentAge={responseData?.member_personal_details?.parantage_type} mobileNumber={responseData?.member_personal_details?.phone}
          dateOfBirth={responseData?.member_personal_details?.dob} education={responseData?.member_personal_details?.education}
        />
        <QuestionAnswerCards data={familyDetailsList} headerTitle={"Family Details"} />
        <QuestionAnswerCards data={paymentDetails} headerTitle={"Request Amount"} paymentStatus={true} />
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
