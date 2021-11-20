import { getPreferenceValues, showToast, ToastStyle } from "@raycast/api";
import fetch from "node-fetch";

const preference = getPreferenceValues();
const { lang1, lang2, entry = "https://t.song.work" } = preference;

export async function fetchResult(text: string = "", signal: AbortSignal): Promise<any | null> {
  if (!Boolean(text)) {
    return {};
  }

  try {
    return await fetch(`${entry}/api?text=${text}&from=${lang1}&to=${lang2}`, {
      signal,
    }).then((res) => res.json());
  } catch (error: any) {
    if (error.name !== "AbortError") {
      console.error(error);
      showToast(ToastStyle.Failure, error.message);
      return {};
    }
  }
}
