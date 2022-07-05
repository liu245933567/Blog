export interface ComicBase {
  /** 动漫 id  */
  id: string;
  name: string;
  /** 动漫头像 */
  portraitUrl: string;
}

interface ChapterInfo {
  id: string;
  name: string;
  images: string[];
}

export interface ComicInfo extends ComicBase {
  chapters: ChapterInfo[];
}
