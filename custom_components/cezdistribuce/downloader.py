"""helper download functions"""

import datetime

try:
    # python 3.9+
    from zoneinfo import ZoneInfo
except ImportError:
    # python 3.6-3.8
    from backports.zoneinfo import ZoneInfo


BASE_URL = "https://www.cezdistribuce.cz/webpublic/distHdo/adam/containers/"
CEZ_TIMEZONE = ZoneInfo("Europe/Prague")


def getCorrectRegionName(region):
    "validate region"
    region = region.lower()
    for x in ["zapad", "sever", "stred", "vychod", "morava"]:
        if x in region:
            return x


def getRequestUrl(region, code):
    "create request URI"
    region = getCorrectRegionName(region)
    return BASE_URL + region + "?&code=" + code.upper()


def timeInRange(start, end, x):
    "is time in range"
    if start <= end:
        return start <= x <= end
    else:
        return start <= x or x <= end


def parseTime(date_time_str):
    "parse time from source data"
    if not date_time_str:
        return datetime.time(0, 0)
    else:
        return datetime.datetime.strptime(date_time_str, "%H:%M").time()


def isHdo(jsonCalendar):
    """
    Find out if the HDO is enabled for the current timestamp

    :param jsonCalendar: JSON with calendar schedule from CEZ
    :param daytime: relevant time in "Europe/Prague" timezone to check if HDO is on or not
    :return: bool
    """
    daytime = datetime.datetime.now(tz=CEZ_TIMEZONE)
    # select Mon-Fri schedule or Sat-Sun schedule according to current date
    if daytime.weekday() < 5:
        dayCalendar = next(
            (x for x in jsonCalendar if x["PLATNOST"] == "Po - Pá" or x["PLATNOST"] == "Po - Ne"), None
        )
    else:
        dayCalendar = next(
            (x for x in jsonCalendar if x["PLATNOST"] == "So - Ne" or x["PLATNOST"] == "Po - Ne"), None
        )

    checkedTime = daytime.time()
    hdo = False

    # iterate over scheduled times in calendar schedule
    for i in range(1, 11):
        startTime = parseTime(dayCalendar["CAS_ZAP_" + str(i)])
        endTime = parseTime(dayCalendar["CAS_VYP_" + str(i)])
        hdo = hdo or timeInRange(start=startTime, end=endTime, x=checkedTime)
    return hdo
