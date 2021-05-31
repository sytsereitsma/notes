danny server and storage team

cd /tank/backups
NAS met backups


Overdracht Jeroen
## Service hooks
* Mijn naam erbij zetten, maar hoe?
* Gaan soms uit, dan weer handmatig aanzetten
* Adam weet ook e.e.a.

Mensen toevoegen
* Summary -> Invite
    * Komen als Stakeholder binnen
    * In enterprice apps /settings/users (Carl, Adam of Andrez vega vargas mail sturen)

## Policies
Settings/Repositories- -> Policies
    Branch policies

Branches security -> Bypass policies 

## Jenkins/GIT
UpdateReferenceRepos
CloneBareReferenceRepos
WorkSpaceCleaner(_ubuntu)

## Pipelines
* Sparse checkouts (TriggerJenkinsJobs.sh)
    - SparseCheckouts folder bevat alle build namen
* Op build slaves staan shas om verschillen te detecteren
    - /jenkins/azure (wordt gemaakt door azure agent)
* Agent draait op ubuntu64-18.04-slave-p1 (iets met 'myagent')
    - Start NIET automatisch op