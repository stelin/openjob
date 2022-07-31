package io.openjob.worker.task;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
public class MyTestTaskConsumer<T> extends BaseConsumer<T> {
    private final AtomicLong counter = new AtomicLong(0L);

    public MyTestTaskConsumer(Long id,
                              Integer handlerCoreThreadNum,
                              Integer handlerMaxThreadNum,
                              String handlerThreadName,
                              Integer pollSize,
                              String pollThreadName,
                              TaskQueue<T> queues) {
        super(id, handlerCoreThreadNum, handlerMaxThreadNum, handlerThreadName, pollSize, pollThreadName, queues);
    }

    @Override
    public void handle(Long id, List<T> tasks) {
        this.handlerExecutor.submit(() -> {
            for (T ignored : tasks) {
                counter.incrementAndGet();
            }
        });
    }

    public AtomicLong getCounter() {
        return counter;
    }
}