import json

lis = []

#events
f = open('data/events.json')

data = json.load(f)

for j in data["events"]:
    lis.extend(j["images"])

    
#projects
f = open('data/projects_updated.json')

data = json.load(f)

for j in data["projects"]:
    lis.append(j["cardCoverImage"])
    lis.append(j["backgroundImage"])
    lis.extend(j["images"])

#webteam
f = open('data/webteam.json')

data = json.load(f)

for j in data.values():
    for i in j:
        if "imageLink" in i:
            lis.append(i["imageLink"])

#ourTeam
f = open('data/ourTeam.json')

data = json.load(f)

for j in data.values():
    for i in j:
        if "imageLink" in i:
            lis.append(i["imageLink"])

#misc
f = open('data/miscellaneous.json')

data = json.load(f)

for j in data.values():
    if type(j) == list:
        lis.extend(j)

#facad
f = open('data/facad.json')

data = json.load(f)

for j in data.values():
    lis.append(j["imageLink"])

with open('all_images.json', 'w') as f:
 json.dump(lis, f, ensure_ascii=False, indent=4)



