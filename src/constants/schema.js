import React  from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
export const LoginSchema = yup.object({
  
    shop_id: yup.string()
      .matches(/^\S*$/, 'Whitespace is not allowed')
      .required('Shop Id is required ')
  }).required();

  export const ResetSchema = yup.object({
    email: yup.string().matches(/^\S*$/, 'Whitespace is not allowed').email().required(),
  }).required();

  export const OtpSchema = yup.object({
    otp: yup.string()
      .matches(/^\S*$/, 'Whitespace is not allowed')
      .required('OTP is required ').min(4),
  }).required();

  export const searchSchema = yup.object({
    search: yup.string().required(),
  }).required();
  export const createOrderSchema = yup.object({
    mobile_number: yup.string().matches(/^\S*$/, 'Whitespace is not allowed').required("Mobile Number is required").min(10,'Mobile Number must be at least 10 characters'),
    customer_name: yup.string().required('Customer name  is Required ').max(25).min(3).matches(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,'First and last space, dots,numbers are not allowed'),
    method: yup.string().required('method type is required').nullable(),
    address: yup.string().required(),
   
  }).required();
  export const searchAndInputSchema = yup.object({
  //  productName:yup.string().required(),
    qty: yup.string().required(),
    price: yup.string().required(),
    unit: yup.string().required().nullable(),
    
  }).required();
  export const EditOrderRbSheetSchema = yup.object({
    productName: yup.string().required('Customer name  is Required ').max(25).min(3).matches(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,'First and last space, dots,numbers are not allowed'),
      qty: yup.string().required(),
      price: yup.string().required(),
      unit: yup.string().required().nullable(),
      
    }).required();
  export const createProductSchema = yup.object({
   
    productName: yup.string().required('Product name  is Required ').max(25).min(3).matches(/^[^\s]+(\s+[^\s]+)*$/,'First and last space are not allowed'),
    category: yup.string().required().max(25).min(3).matches(/^[^\s]+(\s+[^\s]+)*$/,'First and last space are not allowed'),
   
    sub_category: yup.string().required('sub category is required').nullable(),
    unit: yup.string().required().nullable(),
    qty:yup.string().required(),
    purchasePrice:yup.string().required('Purchase Price  is Required'),
    salesPrice:yup.string().required('Sales Price  is Required'),
    keywords: yup.string().required().max(20).min(3).matches(/^[^\s]+(\s+[^\s]+)*$/,'First and last space are not allowed'),
  }).required();
  export const createProductSchemaNew=(value)=>{
    console.log('value of schema',value)
     const createProductSchema = yup.object({
   
      productName: yup.string().required('Product name  is Required ').max(25).min(3).matches(/^[^\s]+(\s+[^\s]+)*$/,'First and last space are not allowed'),
      category: yup.string().required().max(25).min(3).matches(/^[^\s]+(\s+[^\s]+)*$/,'First and last space are not allowed'),
     
      sub_category: yup.string().required('sub category is required').nullable(),
      unit: yup.string().required().nullable(),
      qty:yup.string().required(),
      purchasePrice:yup.string().required('Purchase Price  is Required'),
      salesPrice:yup.string().required('Sales Price  is Required'),
      
      keywords: value.length !== 0 ? yup.string():yup.string().required().max(20).min(3).matches(/^[^\s]+(\s+[^\s]+)*$/,'First and last space are not allowed'),
    }).required();
return createProductSchema
  }
  export const ProfileSchema = yup.object({
   // shopName:yup.string().matches(/^\S*$/, ss'Whitespace is not allowed').required(),
    shopName: yup.string().required('Shop Name is Required ').max(25).min(3).matches(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,'First and last space, dots,numbers are not allowed'),
    mobile_number: yup.string().required(" Mobile Number is Required").matches(/^\S*$/, 'Whitespace is not allowed').min(10,'Mobile Number must be at least 10 characters'),
    email: yup.string().required().matches(/^\S*$/, 'Whitespace is not allowed'),
    
  }).required();
  export const AddCustomerSchema = yup.object({
    customer_name: yup.string().required('Customer name  is Required ').max(25).min(3,'Mobile Number must be at least 3 characters').matches(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,'First and last space, dots,numbers are not allowed'),
     mobile_number: yup.string().matches(/^\S*$/, 'Whitespace is not allowed').required("Mobile Number is required").min(10,'Mobile Number must be at least 10 characters'),
     email: yup.string().matches(/^\S*$/, 'Whitespace is not allowed').email().required(),
    address:yup.string().required(),
    
  }).required();
  export const StockSchema = yup.object({
    productName:yup.string().required(),
    qty:yup.string().required(),
    
    
  }).required();
  
  