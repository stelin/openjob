package io.openjob.server.cluster.task;

import io.openjob.common.OpenjobSpringContext;
import io.openjob.common.request.WorkerJobInstanceTaskLogRequest;
import io.openjob.common.task.BaseConsumer;
import io.openjob.common.task.TaskQueue;
import io.openjob.server.cluster.service.JobInstanceTaskLogService;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.3
 */
@Slf4j
public class WorkerTaskLogConsumer extends BaseConsumer<WorkerJobInstanceTaskLogRequest> {

    public WorkerTaskLogConsumer(Long id,
                                 Integer consumerCoreThreadNum,
                                 Integer consumerMaxThreadNum,
                                 String consumerThreadName,
                                 Integer pollSize,
                                 String pollThreadName,
                                 TaskQueue<WorkerJobInstanceTaskLogRequest> queues) {
        super(id, consumerCoreThreadNum, consumerMaxThreadNum, consumerThreadName, pollSize, pollThreadName, queues, 1000L, 1000L);
    }

    @Override
    public void consume(Long id, List<WorkerJobInstanceTaskLogRequest> tasks) {
        this.consumerExecutor.submit(new WorkerTaskLogRunnable(tasks));
    }

    private static class WorkerTaskLogRunnable implements Runnable {
        private final List<WorkerJobInstanceTaskLogRequest> tasks;

        private WorkerTaskLogRunnable(List<WorkerJobInstanceTaskLogRequest> tasks) {
            this.tasks = tasks;
        }

        @Override
        public void run() {
            try {
                OpenjobSpringContext.getBean(JobInstanceTaskLogService.class).batchInstanceTaskLog(this.tasks);
            } catch (Throwable throwable) {
                log.error("Job instance log failed!", throwable);
            }
        }
    }
}
