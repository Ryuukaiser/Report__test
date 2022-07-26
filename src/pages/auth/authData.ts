import {call, put, takeEvery,all,takeLatest} from "@redux-saga/core/effects"

import { AxiosResponse } from "axios"
import {categoryAction } from "pages/Report/slice/categorySlice"
import { tableAction } from "pages/Report/slice/tableSlice"
import dataApi from "pages/Report/api/ReportApi"
import { fieldAction } from "pages//Report/slice/fieldSlice"
import {listValueFieldAction} from "pages/Report/slice/valueField"
import { ListData } from "interfaces/components"
import { useAppDispatch } from "app/store/hooks"
import { getLoading } from "loading/loading"

// export function * getListTable(){
//     const res: AxiosResponse = yield call(dataApi.getAll)
//     if(res){
//         yield put(postList(res))
//     }
// }



export function * getListCategory(){

    const res: AxiosResponse = yield call(dataApi.getCategory)
    if(res){
        console.log('hello')
        
        yield put(categoryAction.postCategory(res))
    }
}
export function* getListTable({payload}: {payload: number}){

   
    const res : AxiosResponse = yield call(dataApi.getListTable, payload)
    if(res){
        
        yield put(tableAction.showListTables(res))
    }
}
export function* getListField({payload}: {payload: number}){

   
    const res : AxiosResponse = yield call(dataApi.getListField, payload)
    if(res){
        
        yield put(fieldAction.showListFields(res))
    }
}
export function* getListValue({payload}: {payload: ListData} ){
  
    
    const res : AxiosResponse = yield call(dataApi.postValueField, payload)
    if(res){
       
        yield put(listValueFieldAction.showListValueFields(res))
    }
}

export default function* list (){
    
    yield takeLatest(categoryAction.getCategory.type,getListCategory)
    yield takeLatest(tableAction.getListTables,getListTable)
    yield takeLatest(fieldAction.getListFields,getListField)
    yield takeLatest(listValueFieldAction.getlistValueField,getListValue)
}