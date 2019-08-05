# RTAI (5.0) Semaphores
RTAI semaphores have a dual function, a resource sempahore (i.e. mutex), or a counting semaphore. The code has coditional paths for each of these.

## Struct members

|Member|Description|
|--|--|
|queue|The queue of tasks waiting for this semaphore|
|magic|Magic word to check if we're dealing with a semaphore object|
|type|When the semaphore is a resources semaphore (RES_SEM) than SEM::type == 1<br />When the semaphore is a counting semaphore (CNT_SEM) than SEM::type == 0<br />When the semaphore is a binary semaphore (BIN_SEM) than SEM::type == -1|
|restype|Set to initial count when type is 1 (resource semaphore), 0 otherwise|
|count|The present sempahore count, > 0 means available|
|owndby|The task that has taken the semaphore (what if this semaphore has a count higher than 1?)|
|qtype|The task queue type, 0 (priority queue), or 1 (fifo queue).<br />Resource semaphores always use a priority queue, other semaphore types use the FIFO_Q bit to determine what queue type should be used.|
|resq|???|


# Synchronization issues
How are these things thread safe?
  * The SEM::count variable is never atomically incremented or decremented.
  * Same for the queues in the SEM struct
