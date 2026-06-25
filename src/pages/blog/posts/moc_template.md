```dataview  
TABLE without ID file.link as "Titulo", file.mday as "Last Modified"  
FROM #Receitas Template
WHERE file.name != this.file.name 
SORT file.name asc  
```