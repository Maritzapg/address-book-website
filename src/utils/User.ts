export interface User {
  _id?: string
  givenName: string
  familyName: string
  nickName: string
  surName: string
  emails: Email[]
  phones: Phone[]
}

export interface Email {
  label: string
  address: string
}

export interface Phone {
  label: string
  number: string
}
