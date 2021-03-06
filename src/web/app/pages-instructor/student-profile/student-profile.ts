import { Gender } from '../../../types/api-output';

/**
 * Contains a student's profile
 */
export interface StudentProfile {
  shortName: string;
  email: string;
  institute: string;
  nationality: string;
  gender: Gender;
  moreInfo: string;
  pictureKey: string;
}
