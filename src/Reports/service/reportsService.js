import React, { Component } from 'react'
import whatsAppNo from '../../assets/dummyJSON/whatsAppNo.json'
import templateNames from '../../assets/dummyJSON/templateNames.json'
import interpriseIds from '../../assets/dummyJSON/interpriseIds.json'
import allReports from '../../assets/dummyJSON/reports.json'

export class ReportsService {

    static async getWhatsAppNumbers() {
        return await new Promise((res, rej) => { res(whatsAppNo.data) })
    }

    static async getTemplateNames() {
        return await new Promise((res, rej) => { res(templateNames.data) })
    }

    static async getInterpriseIds() {
        return await new Promise((res, rej) => { res(interpriseIds.data) })
    }

    static async getReports() {
        return await new Promise((res, rej) => { res(allReports.data) })
    }

}
