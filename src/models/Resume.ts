class Resume {
   id: number;
   company: string;
   jobName: string;
   dateStart: Date;
   dateFinish: Date;
   detailJob: string;
   skills: string;
  


	constructor($id: number, $company: string, $jobName: string, $dateStart: Date, $dateFinish: Date, $detailJob: string, $skills: string) {
		this.id = $id;
		this.company = $company;
		this.jobName = $jobName;
		this.dateStart = $dateStart;
		this.dateFinish = $dateFinish;
		this.detailJob = $detailJob;
		this.skills = $skills;
	}
  
}

export default Resume;
