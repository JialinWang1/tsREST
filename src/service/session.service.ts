import { SessionDocument, SessionModel } from '@models/session.model'
import { FilterQuery } from 'mongoose'

export const createSession = async (userId: string, userAgent: string) => {
  const session = await SessionModel.create({
    user: userId,
    userAgent,
  })
  return session.toJSON()
}

export const findSessions = async (query: FilterQuery<SessionDocument>) => {
  return SessionModel.find(query).lean()
}
